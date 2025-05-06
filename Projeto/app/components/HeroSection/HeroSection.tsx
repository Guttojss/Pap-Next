import ClientComponent from './ClientComponet';

import { heading1, section2 } from './ServerComponet';

const HeroSection = () => {
  return <ClientComponent section2={section2} heading1={heading1} />;
};

export default HeroSection;