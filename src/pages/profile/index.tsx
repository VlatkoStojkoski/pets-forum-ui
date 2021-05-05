import React, { FC, useState } from 'react';

import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

export const Profile: FC = () => {
	const [isBioExtended, setIsBioExtended] = useState(false);

	return (
		<AspectRatio
			bg='brand.500'
			h='250px'
			ratio={3.5}
			bgImg='https://bit.ly/naruto-sage'
		>
			<>
				<Image
					src='https://via.placeholder.com/1920x1080'
					alt='naruto'
					objectFit='cover'
				/>
				<Box pos='relative' overflow='visible !important'>
					<Grid
						pos='absolute'
						top='100%'
						w='100%'
						transform='translateY(-50%)'
						gridTemplateRows='1fr 1fr'
						gridTemplateColumns='max-content auto'
						gridColumnGap={3}
						px={7}
					>
						<Avatar
							name='Segun Adebayo'
							size='xl'
							src='https://www.thesprucepets.com/thmb/5tDHikYVxrJXwQCgVhacYo5PS4g=/2121x1414/filters:fill(auto,1)/Madelein_WolfGettyImages-845007724-cff4995e51a749e0a69f529c75447f5b.jpg'
							gridRow='1/3'
							gridColumn='1/2'
						/>
						<Heading
							color='#fff'
							gridRow='1/2'
							gridColumn='2/3'
							h='max-content'
							bg='accent.600'
							fontSize='xl'
							px={3}
							py={2}
							borderTopRadius='3xl'
							pos='absolute'
							bottom={0}
							overflowWrap='anywhere'
						>
							Марта Стојкоска
						</Heading>
						<Box
							gridRow='2/3'
							gridColumn='2/3'
							maxW='400px'
							bg='accent.30'
							px={3}
							pos='absolute'
							top={0}
							py={2}
							borderBottomRadius='xl'
						>
							<Text
								fontSize='xs'
								overflowWrap='anywhere'
								{...(!isBioExtended && { noOfLines: 4 })}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
								est assumenda tempora dolorem iste deleniti nisi quis tenetur
								sit earum? Quidem adipisci totam perspiciatis pariatur placeat,
								numquam sit incidunt distinctio.
							</Text>
							<Button
								size='xs'
								mt={1}
								onClick={() => setIsBioExtended(!isBioExtended)}
							>
								{isBioExtended ? 'Show less' : 'More...'}
							</Button>
						</Box>
					</Grid>
				</Box>
			</>
		</AspectRatio>
	);
};
