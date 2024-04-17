import { beach, trail, track, treadmill } from '../lib/locations';

type Props = {
  onSelectChange: (arg1: any) => void;
  val?: string;
};

export function Select({ onSelectChange, val }: Props) {
  function defaultOption(val: string): string {
    switch (true) {
      case beach.includes(val):
        return 'seaside';
      case trail.includes(val):
        return 'trail';
      case track.includes(val):
        return 'track';
      case treadmill.includes(val):
        return 'treadmill';
      default:
        return '';
    }
  }

  return (
    <label>
      <span className="px-1 font-medium">Location Type</span>
      <div className="my-1">
        <select
          defaultValue={val ? defaultOption(val) : ''}
          onChange={onSelectChange}
          name="run-location"
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96 px-2">
          <option>Choose a Location</option>
          <option value="seaside">Seaside</option>
          <option value="trail">Trail</option>
          <option value="track">Track</option>
          <option value="treadmill">Treadmill</option>
        </select>
      </div>
    </label>
  );
}
