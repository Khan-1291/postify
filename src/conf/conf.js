function requireEnv(name) {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value.trim();
}

const conf = {
  appwriteUrl: requireEnv("VITE_APPWRITE_URL"),
  appwriteProjectId: requireEnv("VITE_APPWRITE_PROJECT_ID"),
  appwriteDatabaseId: requireEnv("VITE_APPWRITE_DATABASE_ID"),
  appwriteCollectionId: requireEnv("VITE_APPWRITE_COLLECTION_ID"),
  appwriteBucketId: requireEnv("VITE_APPWRITE_BUCKET_ID"),
};

export default conf;
