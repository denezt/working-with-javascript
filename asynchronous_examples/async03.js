var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const getFirstUserData = async () => {
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://cyberican.com/api/v1/test.php?asset=users", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

const getFirstJobData = async () => {
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://cyberican.com/api/v1/test.php?asset=jobs", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

const watchOverSomeoneDoingSomething = async () => {
  const userData = await getFirstUserData();
  const jobData = await getFirstJobData();
  console.log(Object.keys(userData["users"][0]["user"]));
  return "Username: " + userData["users"][0]["user"]["name"] + "\n" +
  "Job: " + jobData["jobs"][0]["job"]["title"] + "\n";
}

watchOverSomeoneDoingSomething().then(res => {
  console.log(res + "\nStatus: Done");
});
