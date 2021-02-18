import { FC } from 'react';

type SkillObjectType = {
  name: string;
  value: number;
};

type SkillListProps = {
  skills: SkillObjectType[];
};

export const SkillList: FC<SkillListProps> = ({ skills }) => (
  <div>
    <ul>
      {skills.map((skill, index) => (
        <li className='skill-item' key={index}>
          <div className='skill-name'>{skill.name}</div>
          <div className='progress-bar-container'>
            <div
              className='progress-bar'
              style={{ width: skill.value + '0%' }}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);
