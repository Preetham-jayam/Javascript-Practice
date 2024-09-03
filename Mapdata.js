// You have 2 functions which returns promises . Map data from users and userStatuses to get array of
// users with id,name,isActive

const users = [
  {
    id: 1,
    name: "Preetham",
  },
  {
    id: 2,
    name: "jayam",
  },
];

const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

//Soln 1

getUsers().then((users) => {
  getUserStatuses().then((userStatuses) => {
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatuse) => userStatuse.id === user.id
      ).isActive;
      return { ...user, isActive };
    });
    console.log(mappedUsers);
  });
});

//Soln 2

const mapUsers = (users, userStatuses) => {
  return users.map((user) => {
    const isActive = userStatuses.find(
      (userStatuse) => userStatuse.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
};

Promise.all([getUsers(), getUserStatuses()]).then(([users, userStatuses]) => {
  const mappedUsers = mapUsers(users, userStatuses);
  console.log(mappedUsers);
});

//Soln 3 using async await

const getData = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    const data = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatuse) => userStatuse.id === user.id
      ).isActive;
      return { ...user, isActive };
    });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
