import React, { memo } from 'react';
import Image from 'next/image';
import { Member } from '@/types/index';

interface VicePresidentCardProps {
  member: Member;
}

const VicePresidentCard: React.FC<VicePresidentCardProps> = memo(({ member }) => {
  return (
    <div className="leader-card">
      <Image
        src={member.image}
        alt={`${member.name}'s picture`}
        className="member-image"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={member.image}
      />
      <h4 className="member-name">{member.name}</h4>
      <p className="member-description">{member.description}</p>
    </div>
  );
});

export default VicePresidentCard;
