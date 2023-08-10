module.exports = {
    processInput: (data) => {
      try {
        const parsedData = JSON.parse(data);
        return parsedData;
      } catch (error) {
        return { error: 'Invalid input' };
      }
    },
  };
  