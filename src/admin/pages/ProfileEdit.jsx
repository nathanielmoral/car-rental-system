import React, { useState,useRef } from 'react';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    avatar: '/default-avatar.png',
    name: 'Alex Morgan',
    email: 'alex.morgan@company.com',
    phone: '+1 (555) 123-4567',
    password: {
      current: '',
      new: '',
      confirm: ''
    },
    preferences: {
      theme: 'system',
      language: 'en',
      notifications: {
        email: {
          marketing: true,
          security: true,
          updates: true
        },
        sms: {
          marketing: false,
          security: true,
          updates: false
        },
        push: {
          marketing: false,
          security: true,
          updates: true
        }
      }
    },
    security: {
      twoFactorEnabled: false
    }
  });

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');


  const handlePreferenceToggle = (category, key) => {
    setProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [category]: {
          ...prev.preferences[category],
          [key]: !prev.preferences[category][key]
        }
      }
    }));
  };

  const handleNotificationToggle = (channel, type) => {
    setProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: {
          ...prev.preferences.notifications,
          [channel]: {
            ...prev.preferences.notifications[channel],
            [type]: !prev.preferences.notifications[channel][type]
          }
        }
      }
    }));
  };

  const renderNotificationToggle = (channel) => {
    return (
      <div className="space-y-4">
        {['marketing', 'security', 'updates'].map((type) => (
          <div key={type} className="flex items-center justify-between">
            <span className="text-sm text-gray-700 capitalize">
              {type} {channel} Notifications
            </span>
            <button 
              onClick={() => handleNotificationToggle(channel, type)}
              className={`
                relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                ${profile.preferences.notifications[channel][type] ? 'bg-blue-600' : 'bg-gray-200'}
              `}
            >
              <span 
                className={`
                  pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out
                  ${profile.preferences.notifications[channel][type] ? 'translate-x-5' : 'translate-x-0'}
                `}
              />
            </button>
          </div>
        ))}
      </div>
    );
  };

  const handleSave = () => {
    // Implement save logic
    console.log('Profile saved:', profile);
    setEditMode(false);
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic
    console.log('Account deleted');
    setDeleteConfirmation(false);
  };


   // Ref for file input
   const fileInputRef = useRef(null);

   const handleInputChange = (e) => {
     const { name, value } = e.target;
     
     // Handle nested password fields
     if (name.startsWith('password.')) {
       const field = name.split('.')[1];
       setProfile(prev => ({
         ...prev,
         password: {
           ...prev.password,
           [field]: value
         }
       }));
       return;
     }
 
     setProfile(prev => ({
       ...prev,
       [name]: value
     }));
   };
 
   // Handle avatar upload
   const handleAvatarUpload = (e) => {
     const file = e.target.files[0];
     if (file) {
       // Create a URL for the uploaded file
       const reader = new FileReader();
       reader.onloadend = () => {
         setProfile(prev => ({
           ...prev,
           avatar: reader.result
         }));
       };
       reader.readAsDataURL(file);
     }
   };
 
   // Trigger file input when avatar is clicked in edit mode
   const triggerFileInput = () => {
     if (editMode && fileInputRef.current) {
       fileInputRef.current.click();
     }
   };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div 
            className="flex-shrink-0 relative"
            onClick={triggerFileInput}
          >
            <img 
              className={`h-20 w-20 rounded-full object-cover ${editMode ? 'cursor-pointer' : ''}`}
              src={profile.avatar} 
              alt="Profile" 
            />
            {editMode && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-xs">Change</span>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/*"
              onChange={handleAvatarUpload}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>
          <button 
            onClick={() => setEditMode(!editMode)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

        {/* Navigation and Content */}
        <div className="bg-white shadow-md rounded-lg">
          {/* Section Navigation */}
          <div className="flex border-b">
            {['Profile', 'Email', 'Password', 'Security'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`
                  flex-1 py-3 text-sm font-medium transition-colors
                  ${activeSection === section.toLowerCase() 
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:bg-gray-100'}
                `}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Profile Section */}
          {activeSection === 'profile' && (
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-gray-900">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  {editMode ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-gray-900">{profile.phone}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Email Section */}
          {activeSection === 'email' && (
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Email</label>
                  <div className="mt-1 flex items-center">
                    <p className="text-sm text-gray-900 flex-1">{profile.email}</p>
                    {editMode && (
                      <button 
                        className="text-blue-600 hover:text-blue-800 text-sm"
                        onClick={() => {/* Implement email change logic */}}
                      >
                        Change Email
                      </button>
                    )}
                  </div>
                </div>

                {editMode && (
                  <div>
                    <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700">
                      New Email
                    </label>
                    <input
                      type="email"
                      name="newEmail"
                      id="newEmail"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Enter new email address"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Password Section */}
          {activeSection === 'password' && (
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="password.current"
                    id="currentPassword"
                    value={profile.password.current}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password.new"
                    id="newPassword"
                    value={profile.password.new}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="password.confirm"
                    id="confirmPassword"
                    value={profile.password.confirm}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Security Section */}
          {activeSection === 'security' && (
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-6 space-y-6">
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Enable Two-Factor Authentication</span>
                    <button 
                      onClick={() => handlePreferenceToggle('security', 'twoFactorEnabled')}
                      className={`
                        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                        ${profile.security.twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-200'}
                      `}
                    >
                      <span 
                        className={`
                          pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out
                          ${profile.security.twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'}
                        `}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
                  {renderNotificationToggle('email')}
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Notifications</h3>
                  {renderNotificationToggle('sms')}
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
                  {renderNotificationToggle('push')}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {editMode && (
            <div className="p-6 border-t flex justify-end space-x-3">
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
              <button 
                onClick={() => setDeleteConfirmation(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Account Deletion</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setDeleteConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;