import { SectionContainer } from '../commons/SectionContainer';
import { v4 as uuid } from 'uuid';

const ContentImageData = [
  {
    id: uuid(),
    title: 'Loans',
    content:
      'Got Storage but cant stake? Request for funds to participate in the network !',
    align: 'right',
    image: 'https://res.cloudinary.com/amznpersonal1/image/upload/v1702181247/wfkhye1ejmxqcusezzyl.png',
  },

  {
    id: uuid(),
    title: 'Reputation',
    content:
      'Worried about collateral? Know what the network thinks of you.',
    align: 'left',
    image: 'https://res.cloudinary.com/amznpersonal1/image/upload/v1702181246/ebc4zgnu5bmlmjyjr7ji.png',
  },
  {
    id: uuid(),
    title: 'Stake FIL and rewards',
    content: 'Got FIL? stake and watch your FIL grow.',
    align: 'right',
    image: 'https://res.cloudinary.com/amznpersonal1/image/upload/v1702181247/wfkhye1ejmxqcusezzyl.png',
  }
,
];

export const ContentImage = () => {
  return (
    <SectionContainer className="mt-16 flex w-10/12 flex-col items-center justify-center space-y-16">
      {ContentImageData.map((item) => (
        <div id={item.id} key={item.id} className="grid gap-y-8 md:grid-cols-2">
          <div
            className={`rounded-3xl ${
              item.align === 'left' ? 'md:order-1' : ''
            }`}
          >
            <img
              src={item.image}
              objectFit="cover"
              alt="Process Banner 1"
              className="offset-y-0 offset-x-8 blur-16 w-full drop-shadow-xl"
            />
          </div>
          <div
            className={`flex items-start justify-center flex-col ${
              item.align === 'left'
                ? 'ml-auto md:pr-16 lg:pr-24 xl:pr-32'
                : 'mr-auto md:pl-16 lg:pl-24  xl:pl-32'
            } content my-auto text-black/60`}
          >
            <h3 className="md:h3 mb-2 text-[30px] font-semibold text-white">
              {item.title}
            </h3>
            <div className="mt-0 w-36 border-b-4 border-secondary-500"></div>
            <p className="text-secondary-200 !text-[15px] mt-2 opacity-60">{item.content}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
