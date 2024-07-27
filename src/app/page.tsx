import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello Next!</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
    </main>
  );
}
