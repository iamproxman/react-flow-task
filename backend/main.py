from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in adj:
            adj[source].append(target)
        else:
            adj[source] = [target]

    state = {}
    is_dag = True

    def dfs(node_id):
        if state.get(node_id) == 1:
            return False # Cycle
        if state.get(node_id) == 2:
            return True
        
        state[node_id] = 1
        for neighbor in adj.get(node_id, []):
            if not dfs(neighbor):
                return False
        
        state[node_id] = 2
        return True

    for node in nodes:
        node_id = node['id']
        if state.get(node_id) != 2:
            if not dfs(node_id):
                is_dag = False
                break

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
