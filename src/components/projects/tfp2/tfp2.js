import { useEffect } from 'react';
import { Vec2 } from '../../../js/vec.min';
import { delegateNoiseCtxTo, delegateSkinCtxTo, CFG } from './control';

const touchAt = new Vec2();
const touchTo = new Vec2();

export default function TFP2() {
  useEffect(() => {
    let canvas = document.getElementById('tfp2__canvas');

    delegateNoiseCtxTo(canvas.getContext('2d'));
    delegateSkinCtxTo(
      document.getElementById('tfp2__skin-canvas').getContext('2d')
    );

    canvas.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', drag);
    });

    canvas.addEventListener('touchstart', t => {
      // Set movement "start" position.
      touchAt.xy = [t.touches[0].pageX, t.touches[0].pageY];
      window.addEventListener('touchmove', drag, { passive: false });
    }, { passive: false });
  }, []);

  return (
    <div className="preview--tfp2">
      <canvas
        className="preview__canvas preview__body"
        id="tfp2__canvas"
        height="192"
        width="192"
      />
      <canvas id="tfp2__skin-canvas" />
    </div>
  );
}

function drag(e) {
  // Take movement deltas.
  const gap = new Vec2();

  switch (e.type) {
    case 'mousemove':
      gap.xy = [e.movementX, e.movementY];
      // Stop listener.
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', drag);
      });
      break;
    case 'touchmove':
      e.preventDefault();
      // Set movement "end" position.
      touchTo.xy = [e.touches[0].pageX, e.touches[0].pageY];
      gap.copy(Vec2.subtract(touchTo, touchAt));
      // Update "start" position to next iteration at same event.
      touchAt.copy(touchTo);
      // Stop listener.
      window.addEventListener('touchend', () => {
        window.removeEventListener('touchmove', drag);
      });
      break;
    default: return;
  }

  // Update settings.
  CFG.traslation.subtract(gap);
}