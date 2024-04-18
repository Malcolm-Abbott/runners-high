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

export async function editRun(run: Run, runId) {
  try {
    const res = await fetch(`/api/runs/${runId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(run),
    });
    if (!res.ok) throw new Error('Response connection not OK');
  } catch (err) {
    console.error(err);
  }
}

export async function deleteRun(runId) {
  try {
    const res = await fetch('/api/runs', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ runId }),
    });
    if (!res.ok) throw new Error('Response connection not OK');
  } catch (err) {
    console.error(err);
  }
}
