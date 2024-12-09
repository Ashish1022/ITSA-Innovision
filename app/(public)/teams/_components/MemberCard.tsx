import React from 'react';
import { Member } from '@/types/index';
import Image from 'next/image';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="member-card">
      <Image
        src={member.image}
        alt={`${member.name}'s picture`}
        className="member-image"
        width={300}
        height={300}
      />
      <h4 className="member-name">{member.name}</h4>
      <p className="member-description">{member.description}</p>
    </div>
  );
};

export default MemberCard;
