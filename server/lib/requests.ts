import { ClientError } from './client-error';

export type Run = {
  distanceRan: string;
  runDuration: number;
  averageHeartRate: number;
  photoUrl: string;
  runDate: string;
};

export function validatePost(
  distanceRan: Run,
  runDuration: Run,
  averageHeartRate: Run,
  photoUrl: Run,
  runDate: Run
): void {
  if (!Number.isInteger(+runDuration) || !Number.isInteger(+averageHeartRate))
    throw new ClientError(
      400,
      'runDuration and averageHeartRate must be numbers'
    );
  if (!distanceRan || !photoUrl || !runDate)
    throw new ClientError(400, 'All required input fields not completed');
}
