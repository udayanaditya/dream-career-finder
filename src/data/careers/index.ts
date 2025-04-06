
import { Career } from '@/types/career';
import { scienceCareers } from './scienceCareers';
import { commerceCareers } from './commerceCareers';
import { artsCareers } from './artsCareers';
import { engineeringCareers } from './engineeringCareers';
import { medicalCareers } from './medicalCareers';
import { entrepreneurCareers } from './entrepreneurCareers';

// Combine all career sets
export const careers: Career[] = [
  ...scienceCareers,
  ...commerceCareers,
  ...artsCareers,
  ...engineeringCareers,
  ...medicalCareers,
  ...entrepreneurCareers
];

// Export utility functions that work with the careers
export const getCareersByIds = (ids: string[]): Career[] => {
  return careers.filter(career => ids.includes(career.id));
};

export const getAllCareers = (): Career[] => {
  return careers;
};

export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};

export const getCareersByStream = (stream: string): Career[] => {
  return careers.filter(career => 
    career.stream?.toLowerCase() === stream.toLowerCase() || 
    career.tags.includes(stream.toLowerCase())
  );
};

export const getAvailableStreams = (): string[] => {
  const streamSet = new Set<string>();
  
  careers.forEach(career => {
    if (career.stream) {
      streamSet.add(career.stream);
    }
  });
  
  return Array.from(streamSet);
};
