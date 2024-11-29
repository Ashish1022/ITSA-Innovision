import React from 'react';
import TeamCard from './_components/TeamCard';
import { teams } from '@/constants';
import Transition from '@/components/shared/Transition';


const Teams: React.FC = () => {
  return (
    <>
    <Transition/>
      <div className="page bg-teams-bg bg-fixed max-md:p-6">
      {/* <h3 className="h1-teams text-primary-500 font-bold tracking-wide">Meet the Teams</h3> */}
        <div className="teams-grid">
          {teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
