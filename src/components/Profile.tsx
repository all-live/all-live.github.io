import React, { FC } from 'react';
import { LoadedProfile, UnLoadedProfile } from '@types';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileProps {
  profile: LoadedProfile | UnLoadedProfile;
}

const Profile: FC<ProfileProps> = (props) => {
  const {
    profile: { isLoaded, ...infos },
  } = props;

  const { avatar_url, ghUsername, role, blog, bio, html_url, company } = infos;

  return (
    <div className="profile">
      <div className={`profile-image ${isLoaded ? '' : 'skeleton'}`}>
        {isLoaded && avatar_url && <Image className="profile-image" src={avatar_url} width={300} height={300} />}
      </div>
      <div className="profile-content">
        <div className={`profile-username profile-text ${isLoaded ? '' : 'skeleton'}`}>
          {isLoaded ? ghUsername : null}
        </div>
        <div className={`profile-role profile-text ${isLoaded ? '' : 'skeleton'}`}>
          {isLoaded ? `Role : ${role}` : null}
        </div>
        {bio && <div className="profile-role profile-text">{isLoaded ? `Bio : ${bio}` : null}</div>}
        {company && <div className="profile-role profile-text">{isLoaded ? `Company : ${company}` : null}</div>}
        <div className="flex-row">
          {html_url && (
            <Link href={html_url}>
              <a target="_blank" className="profile-chip">
                <Image src="/images/github-logo-white.png" width={24} height={24} />
                <span className="profile-chip-text">GitHub</span>
              </a>
            </Link>
          )}
          {blog && (
            <Link href={blog}>
              <a target="_blank" className="profile-chip">
                <Image src="/images/blog-logo-white.png" width={24} height={24} />
                <span className="profile-chip-text">Blog</span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
