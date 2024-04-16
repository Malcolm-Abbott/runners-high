export type Run = {
  distanceRan: string;
  runDuration: number;
  averageHeartRate: number;
  photoUrl: string;
  runDate: string;
  runId?: number;
};

export async function addRun(run: Run) {
  try {
    const res = await fetch('/api/runs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(run),
    });
    if (!res.ok) throw new Error('Response connection not OK');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
