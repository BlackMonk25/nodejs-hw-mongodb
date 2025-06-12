// import dotenv from 'dotenv';

// dotenv.config();

// function getEnvVar(name, defaultValue) {
//   const value = process.env[name];

//   if (value) return value;

//   if (defaultValue) return defaultValue;

//   throw new Error(`Missing process.env.${name}`);
// }

// export { getEnvVar };





import dotenv from 'dotenv';

dotenv.config();


function getEnvVar(name, defaultValue) {
  const value = process.env[name];

  if (typeof value === 'string' && value.trim() !== '') {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  const available = Object.keys(process.env).join(', ');
  throw new Error(`❌ Missing process.env.${name}. Available: [${available}]`);
}

export { getEnvVar };
