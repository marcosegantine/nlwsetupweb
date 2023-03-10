interface ProgressBarProps {
  progress: number;
}
const ProgressBar = (props: ProgressBarProps) => {
  const progressStyles = {
    with: `${props.progress}%`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados no dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600" 
        style={{width: `${props.progress}%`}}
      ></div>
    </div>
  );
};

export default ProgressBar;
