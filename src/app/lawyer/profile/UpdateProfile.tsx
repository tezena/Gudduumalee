import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { UploadDropzone } from '@/lib/uploadthing';
import { useToast } from '@/components/ui/use-toast';

interface Language {
  name: string;
}

interface ProfileFormProps {
  languages: Language[];
  profilePhoto: string;
  bio: string;
  fullName: string;
  phoneNumber: string;
  onUpdatePhoto: (photo: string) => void;
  onUpdateBio: (bio: string) => void;
  onUpdateLanguage: (index: number, language: Language) => void;
  onUpdateFullName: (fullName: string) => void;
  onUpdatePhoneNumber: (phoneNumber: string) => void;
  onUpdateResume: (resumeUrl: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  languages,
  profilePhoto,
  bio,
  fullName,
  phoneNumber,
  onUpdatePhoto,
  onUpdateBio,
  onUpdateLanguage,
  onUpdateFullName,
  onUpdatePhoneNumber,
  onUpdateResume,
}) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [newLanguage, setNewLanguage] = useState<Language>({ name: '' });
  const [editingLanguageIndex, setEditingLanguageIndex] = useState<number | null>(null);
  const [newFullName, setNewFullName] = useState(fullName);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [isEditingResume, setIsEditingResume] = useState(false);
  const [newResume, setNewResume] = useState<string>(''); // Stores the resume URL
  const { toast } = useToast();

  const handleBioSubmit = () => {
    onUpdateBio(newBio.toUpperCase());
    setIsEditingBio(false);
  };

  const handleUpdateLanguage = () => {
    if (editingLanguageIndex !== null) {
      onUpdateLanguage(editingLanguageIndex, { ...newLanguage, name: newLanguage.name.toUpperCase() });
      setEditingLanguageIndex(null);
      setNewLanguage({ name: '' });
    }
  };

  const handleUpdateProfile = () => {
    if (isEditingBio) handleBioSubmit();
    if (editingLanguageIndex !== null) handleUpdateLanguage();
    if (isEditingPhoto) setIsEditingPhoto(false);
    onUpdateFullName(newFullName.toUpperCase());
    onUpdatePhoneNumber(newPhoneNumber.toUpperCase());
    if (isEditingResume) {
      onUpdateResume(newResume); // Assuming newResume holds the URL of the uploaded resume
      setIsEditingResume(false);
    }

    const updatedProfile = {
      fullName: newFullName.toUpperCase(),
      phoneNumber: newPhoneNumber.toUpperCase(),
      bio: newBio.toUpperCase(),
      languages: languages.map(lang => ({ name: lang.name.toUpperCase() })),
      profilePhoto,
    };

    console.log('Updated Profile:', updatedProfile);
  };

  const startEditingLanguage = (index: number) => {
    setNewLanguage(languages[index]);
    setEditingLanguageIndex(index);
  };

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-2xl mb-4">Update Profile</h2>

     

      <div className="mb-4 text-center">
        <div className="relative inline-block">
          <img src={profilePhoto} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
          <div
            className="absolute bottom-0 bg-white right-0 w-8 h-8 rounded-full outline outline-green-500 flex justify-center items-center cursor-pointer"
            onClick={() => setIsEditingPhoto(true)}
          >
            <Icon icon="ic:outline-edit" color="green" width={20} height={20} />
          </div>
        </div>
        {isEditingPhoto && (
          <div className="mt-4">
            <UploadDropzone
              className="p-2 border border-gray-600"
              endpoint="fileUploader"
              onClientUploadComplete={(res) => {
                const photoUrl = res[0].url;
                onUpdatePhoto(photoUrl);
              }}
              onUploadError={(error: Error) => {
                toast({ title: `ERROR! ${error.message}` });
              }}
            />                                      
          </div>
        )}
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            value={newFullName}
            onChange={(e) => setNewFullName(e.target.value)}
            className="border p-2 w-full mb-2"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="text"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            className="border p-2 w-full mb-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Languages</label>
        <ul>
          {languages.map((language, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{language.name.toUpperCase()}</span>
              <div
                className="bottom-0 bg-white right-0 w-8 h-8 flex justify-center items-center cursor-pointer"
                onClick={() => startEditingLanguage(index)}
              >
                <Icon icon="ri:edit-2-fill" color="#7B3B99" width={25} height={25} />
              </div>
            </li>
          ))}
        </ul>
        {editingLanguageIndex !== null && (
          <div className="mt-4">
            <input
              type="text"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value.toUpperCase() })}
              placeholder="Language"
              className="border p-2 w-full mb-2"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Resume</label>
        <div className="flex justify-between items-center">
          <p>{newResume ? 'Resume Uploaded' : 'No Resume Uploaded'}</p>
          <div
            className="bottom-0 bg-white right-0 w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={() => setIsEditingResume(true)}
          >
            <Icon icon="ri:edit-2-fill" color="#7B3B99" width={25} height={25} />
          </div>
        </div>
        {isEditingResume && (
          <div className="mt-4">
            <UploadDropzone
              className="p-2 border border-gray-600"
              endpoint="fileUploader"
              onClientUploadComplete={(res) => {
                const resumeUrl = res[0].url;
                setNewResume(resumeUrl);
              }}
              onUploadError={(error: Error) => {
                toast({ title: `ERROR! ${error.message}` });
              }}
            />                                      
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Bio</label>
        {isEditingBio ? (
          <textarea
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            className="border p-2 w-full mb-2"
          />
        ) : (
          <div className="flex justify-between items-center">
            <p>{bio}</p>
            <div
              className="bottom-0 bg-white right-0 w-8 h-8 flex justify-center items-center cursor-pointer"
              onClick={() => setIsEditingBio(true)}
            >
              <Icon icon="ri:edit-2-fill" color="#7B3B99" width={25} height={25} />
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-[#7B3B99] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileForm;
