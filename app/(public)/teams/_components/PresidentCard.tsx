import React, { memo } from 'react';
import Image from 'next/image';
import { Member } from '@/types/index';

interface PresidentCardProps {
  member: Member;
}

const PresidentCard: React.FC<PresidentCardProps> = memo(({ member }) => {
  return (
    <div className="member-card">
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
    </div>
  );
});

export default PresidentCard;
