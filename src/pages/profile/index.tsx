import React, { FC, useState, useEffect } from 'react';

import { Box, Grid } from '@chakra-ui/react';
import { getUserPets, UserPet } from 'api';
import { CatAndDog } from 'icons';
import { Section } from 'pages/dashboard/Section';

import { CoverSection } from './CoverSection';
import { PetPreview } from './PetPreview';

export const Profile: FC = () => {
	const [pets, setPets] = useState<UserPet[]>([]);

	useEffect(() => {
		(async () => {
			const petsArr = await getUserPets('userId123');
			setPets(petsArr);
		})();
	}, []);

	return (
		<>
			<CoverSection />
			<Box px={{ base: 3, sm: 7 }} mt={10}>
				<Section icon={<CatAndDog boxSize='32px' />} title='Миленици'>
					<Grid
						templateColumns='repeat(auto-fill, minmax(275px, 1fr))'
						gap={5}
						px={{ base: 0, sm: 7 }}
						pb={5}
						mt={5}
					>
						{pets.map((pet, petI) => (
							<PetPreview config={pet} key={petI} />
						))}
					</Grid>
				</Section>
			</Box>
		</>
	);
};
