import React, { useCallback, useEffect, useState } from 'react';
import Layout from '@layout';
import { LoadedProfile, UnLoadedProfile } from '@types';
import { API } from '@constants';
import { Profile, Meta, Content } from '@components';

const teammates: UnLoadedProfile[] = [
  { ghUsername: 'JeongShin', role: '프론트엔드 개발', isLoaded: false },
  { ghUsername: 'leeshinyook', role: '백엔드 개발', isLoaded: false },
  { ghUsername: 'jinwoongshin', role: '마케팅 영업', isLoaded: false },
];

const TeammatesIndexPage = () => {
  const [profiles, setProfiles] = useState<(LoadedProfile | UnLoadedProfile)[]>([...teammates]);

  const getProfiles = useCallback(async () => {
    try {
      const requestPromises = profiles.map((v) => fetch(`${API.GH_USER_BASE_URL}/${v.ghUsername}`));
      const responses = await Promise.all(requestPromises);
      const jsonPromises = responses.map((v) => v.json());
      setProfiles((await Promise.all(jsonPromises)).map((v, index) => ({ ...v, ...teammates[index], isLoaded: true })));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Layout meta={<Meta title="올리브 | 팀원소개" />}>
      <Content>
        <h2 className="allive-subtitle">올리브 팀원을 소개 합니다 👋</h2>
        {profiles.map((profile) => (
          <Profile key={profile.ghUsername} profile={profile} />
        ))}
      </Content>
    </Layout>
  );
};

export default TeammatesIndexPage;
