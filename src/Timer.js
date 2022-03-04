import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import Logo from './components/Logo/Logo';
import { useStateValue } from './contexts/stateProvider';
import { useClockify } from './hooks/useClockify';

const Timer = () => {

  const [{projectName, timerLabel}] = useStateValue();
  const clockifiedValue = useClockify();

  return (
    <div className="timer">
      <h1 className='timer__maintitle'>{projectName}</h1>
      <h3 id='timer-label' className='timer__label'>{timerLabel}</h3>
      <h2 id='time-left' className='timer__time'>{clockifiedValue}</h2>
      <Controls />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
      <Logo />
    </div>
  );
}

export default Timer;
