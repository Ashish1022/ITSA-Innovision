import React from 'react';
import dynamic from 'next/dynamic';

const TeamCard = dynamic(() => import('./_components/TeamCard'), {
  ssr: false,
});

import { teams } from '@/constants';
import Transition from '@/components/shared/Transition';
import PresidentCard from './_components/PresidentCard';
import VicePresidentCard from './_components/VicePresidentCard';
import TreasurerCard from './_components/TreasurerCard';


const Teams: React.FC = () => {
  return (
    <>
      <Transition />
      <div className="page max-md:p-6 p-8">
        {/* General President, Vice President, and Treasurer Section */}
        <div className="general-leaders">
          <div className="leaders-container">
            <div className="leader-card">
              <h3 className="leader-title">President</h3>
              <PresidentCard member={{ name: 'President', image: '/assets/teams/p.jpeg', description: '' }} />
            </div>
            <div className="leader-card">
              <h3 className="leader-title">Vice President</h3>
              <VicePresidentCard member={{ name: 'Vice President', image: '/assets/teams/vp.jpeg', description: '' }} />
            </div>
            <div className="leader-card">
              <h3 className="leader-title">Treasurer</h3>
              <TreasurerCard member={{ name: 'Treasurer', image: '/assets/teams/treasure.jpeg', description: '' }} />
            </div>
          </div>
        </div>

        {/* Teams Grid */}
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
