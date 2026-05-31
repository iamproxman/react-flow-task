import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges
    }), shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            alert(
                `Pipeline Analysis\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error parsing pipeline:', error);
            alert('Failed to analyze pipeline. Ensure the backend is running.');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2"
            >
                Run Pipeline
            </button>
        </div>
    );
}
