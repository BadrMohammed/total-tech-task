/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {
  repository,
  saveRepositoriesData,
  saveRepositoryDetails,
} from '../../redux/reducers/repositorySlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import repositoryService from '../../infrastructure/services/repository-service';
import InfiniteScroll from 'react-native-infinite-scrolling';
import {
  VStack,
  Avatar,
  Box,
  HStack,
  Spacer,
  Heading,
  Button,
  Text,
  Spinner,
} from 'native-base';
import {pageContainer} from '../../utils/Styles';
import {locale} from '../../lang/locale';

function Repository({navigation}: any) {
  const repositoryState = useAppSelector(repository);
  const dispatch = useAppDispatch();

  useEffect(() => {
    repositoryService(dispatch, repositoryState.page);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(saveRepositoriesData([]));
    };
  }, []);

  const loadMore = () => {
    repositoryService(dispatch, repositoryState.page);
  };

  const handleDetailsClick = (item: any) => {
    dispatch(saveRepositoryDetails(item));
    navigation.navigate('Details');
  };

  const renderCard = ({item}: any) => {
    return (
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'gray.600',
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2">
        <HStack space={3} justifyContent="space-between">
          <Avatar
            size="48px"
            source={{
              uri: item.owner_photo,
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {item.owner_userName}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              {item.stars}
            </Text>
          </VStack>
          <Spacer />
          <Button
            size="md"
            variant="link"
            onPress={() => handleDetailsClick(item)}>
            <Text color={'#bb2d3b'} bold>
              {locale.lang.Repository.Details}
            </Text>
          </Button>
        </HStack>
      </Box>
    );
  };
  return (
    <View style={[pageContainer]}>
      <Heading fontSize="md" p="4" pb="3">
        {locale.lang.Repository.title}
      </Heading>

      {repositoryState.isLoading ? (
        <HStack space={8} justifyContent="center" alignItems="center">
          <Spinner size="lg" />
        </HStack>
      ) : (
        <InfiniteScroll
          renderData={renderCard}
          data={repositoryState.data}
          loadMore={loadMore}
        />
      )}
    </View>
  );
}

export default Repository;
