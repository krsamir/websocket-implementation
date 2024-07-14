import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { COUNT_DOWN } from "../data/styles";

const targetDate = moment().add(20, "minutes").utc().format();
function BiddingController() {
  //   console.info(moment().add(2, "h").format("YYYY-MM-DDTHH:mm:ss"));
  console.info();
  const calculateTimeLeft = useCallback(() => {
    const now = moment();
    const duration = moment.duration(moment(targetDate).diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft?.seconds >= 0) {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, timeLeft?.seconds]);
  return (
    <React.Fragment>
      {timeLeft?.seconds >= 0 && (
        <COUNT_DOWN.CONTAINER>
          <span>Bidding Stops in:</span>

          <COUNT_DOWN.TEXT>
            {timeLeft.days > 0 && <>{timeLeft.days}d</>}
          </COUNT_DOWN.TEXT>
          <COUNT_DOWN.TEXT>
            {timeLeft.hours > 0 && <>{timeLeft.hours}h</>}
          </COUNT_DOWN.TEXT>
          <COUNT_DOWN.TEXT>
            {timeLeft.minutes > 0 && <>{timeLeft.minutes}m</>}
          </COUNT_DOWN.TEXT>
          <COUNT_DOWN.TEXT>
            {timeLeft.seconds > 0 && <>{timeLeft.seconds}s</>}
          </COUNT_DOWN.TEXT>
        </COUNT_DOWN.CONTAINER>
      )}
    </React.Fragment>
  );
}

export default BiddingController;
