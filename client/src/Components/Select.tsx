export function Select() {
  return (
    <label>
      <span className="px-1 font-medium">Location Type</span>
      <div className="my-1">
        <select
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
