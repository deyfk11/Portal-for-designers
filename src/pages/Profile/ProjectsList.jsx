import React from 'react';

import Shiba from 'assets/shiba.jpeg';
import styled from 'styled-components';

import Project from './Project';

const mockData = [
  { title: 'Дизайн мобильного приложения', desc: 'Используемые технологии', img: Shiba },
  { title: 'Проектирование канала', desc: 'Используемые технологии', img: Shiba },
  { title: '3D-модель для CareX', desc: 'Используемые технологии', img: Shiba },
  { title: '3D-модель для CareX', desc: 'Используемые технологии', img: Shiba },
  { title: '3D-модель для CareX', desc: 'Используемые технологии', img: Shiba },
  { title: '3D-модель для CareX', desc: 'Используемые технологии', img: Shiba },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectsList = () => {
  console.log();

  return (
    <Wrapper>
      {mockData.map(((project) => (
        <Project project={project} />
      )))}
    </Wrapper>
  );
};

export default ProjectsList;
