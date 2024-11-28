import React from 'react';
import MemberCard from './MemberCard';
import { Team } from '@/types';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card">
      <h2 className="team-name">{team.name}</h2>
      <div className="team-head">
        <h3>Team Head</h3>
        <MemberCard member={team.head} />
      </div>
      <div className="members">
        <h3>Team Members</h3>
        {team.members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
