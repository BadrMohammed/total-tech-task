/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  Center,
} from 'native-base';
import {repository} from '../../redux/reducers/repositorySlice';
import {useAppSelector} from '../../redux/hooks';
import { View } from 'react-native';
import { pageContainer } from '../../utils/Styles';

function RepositoryDetails() {
  const repositoryState = useAppSelector(repository);
  // repositoryDetails
  return (
    <View style={[pageContainer]}>
    <Box alignItems="center" mt={10}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: repositoryState.repositoryDetails.owner_photo,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            {repositoryState.repositoryDetails.stars + ' stars'}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {repositoryState.repositoryDetails.name}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {repositoryState.repositoryDetails.owner_userName}
            </Text>
          </Stack>
          <Text fontWeight="400">
            {repositoryState.repositoryDetails.description}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                {repositoryState.repositoryDetails.issues + ' issues'}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </View>
  );
}
export default RepositoryDetails;
