import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [launchesUpcoming, setLaunchesUpcoming] = useState(null);
  const [nextLaunch, setNextLaunch] = useState(null);

  useEffect(() => {
    (async () => {
      const launchesUpcomingResponse = await fetch(
        "https://api.spacexdata.com/v4/launches/upcoming"
      );
      const launchesUpcomingData = await launchesUpcomingResponse.json();

      setLaunchesUpcoming(launchesUpcomingData);

      const nextLaunchResponse = await fetch(
        "https://api.spacexdata.com/v4/launches/next"
      );
      const nextLaunchData = await nextLaunchResponse.json();

      setNextLaunch(nextLaunchData);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ launchesUpcoming, nextLaunch }}>
      {props.children}
    </DataContext.Provider>
  );
};
