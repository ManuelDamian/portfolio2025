//* scrollHelpers.ts
export const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('home');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollToAboutme = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('aboutme');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('work');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('skills');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('contact');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};