'use client';

import { useState } from 'react';
import { EditProfileModal } from '@/components/features/profile/EditProfileModal';
import { ProfileAvatar } from '@/components/features/profile/ProfileAvatar';
import { ProfileDetails } from '@/components/features/profile/ProfileDetails';
import { ProfileHeader } from '@/components/features/profile/ProfileHeader';
import type { PlayerProfile, ProfileFormData, ProfileFormErrors } from '@/types/userProfileType';
import { profileSchema } from '@/schemas/profileSchema';

export default function ProfilePage() {
  const [user, setUser] = useState<PlayerProfile>({
    name: 'رضا محمدی',
    username: 'reza__Mohammadi82',
    phone: '0911 111 1111',
    level: 'ثبت نشده',
    joinedAt: '1405/05/23',
    profileImage: null,
  });

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: user.name,
    username: user.username,
  });

  const [formErrors, setFormErrors] = useState<ProfileFormErrors>({
    name: '',
    username: '',
  });

  const [imageError, setImageError] = useState('');

  const handleSaveProfile = () => {
    const result = profileSchema.safeParse(formData);

    if (!result.success) {
      const errors: ProfileFormErrors = {
        name: '',
        username: '',
      };

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (field === 'name') {
          errors.name = issue.message;
        }

        if (field === 'username') {
          errors.username = issue.message;
        }
      });

      setFormErrors(errors);
      return;
    }

    setFormErrors({
      name: '',
      username: '',
    });

    setUser((prev) => ({
      ...prev,
      name: result.data.name,
      username: result.data.username,
    }));

    setIsEditOpen(false);
  };

  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        bg-[#F5F7F2]
        px-0 py-0
        sm:px-4 sm:py-6
        lg:px-8 lg:py-10
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          overflow-hidden
          bg-white
          shadow-[0_8px_35px_rgba(31,41,55,0.08)]
          sm:rounded-[28px]
        "
      >
        {/* Cover */}
        <section className="relative h-[190px] overflow-hidden bg-[#DCE3DF] md:h-[230px]">
          {/* Decorative shapes */}
          <div className="absolute -left-16 top-10 h-52 w-52 rounded-full border border-white/60" />

          <div className="absolute left-20 -top-32 h-72 w-72 rounded-full border border-white/50" />

          <div className="absolute -right-12 top-6 h-64 w-64 rounded-full border border-white/50" />

          <div className="absolute right-40 -top-20 h-72 w-72 rounded-full border border-white/40" />

          <div className="absolute left-[27%] -top-16 h-32 w-32 rounded-full bg-[#C7F43D]/80 shadow-sm" />

          <div className="absolute right-16 top-12 grid grid-cols-6 gap-2 opacity-40">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#1F2937]" />
            ))}
          </div>
        </section>

        {/* Profile Content */}
        <section className="relative px-5 pb-10 md:px-16">
          <ProfileAvatar
            name={user.name}
            profileImage={user.profileImage}
            onImageChange={(image) => {
              setUser((prev) => ({
                ...prev,
                profileImage: image,
              }));
            }}
            onImageError={(message) => {
              setImageError(message);
            }}
          />
          <ProfileHeader
            name={user.name}
            username={user.username}
            level={user.level}
            onEdit={() => {
              setFormData({
                name: user.name,
                username: user.username,
              });

              setFormErrors({
                name: '',
                username: '',
              });

              setIsEditOpen(true);
            }}
          />

          {/* Image Error */}
          {imageError && (
            <div className="mt-6 flex justify-center">
              <p
                role="alert"
                className="
                  rounded-lg
                  bg-red-50
                  px-4 py-2
                  text-center
                  text-xs
                  text-red-600
                "
              >
                {imageError}
              </p>
            </div>
          )}
          <ProfileDetails
            phone={user.phone}
            username={user.username}
            level={user.level}
            joinedAt={user.joinedAt}
          />
        </section>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditOpen}
        phone={user.phone}
        formData={formData}
        formErrors={formErrors}
        onNameChange={(value) => {
          setFormData((prev) => ({
            ...prev,
            name: value,
          }));

          setFormErrors((prev) => ({
            ...prev,
            name: '',
          }));
        }}
        onUsernameChange={(value) => {
          setFormData((prev) => ({
            ...prev,
            username: value,
          }));

          setFormErrors((prev) => ({
            ...prev,
            username: '',
          }));
        }}
        onSave={handleSaveProfile}
        onClose={() => {
          setFormErrors({
            name: '',
            username: '',
          });

          setIsEditOpen(false);
        }}
      />
    </main>
  );
}
