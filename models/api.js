module.exports = {
    processInput: (datainput) => {
      try {
        const parsedData = JSON.parse(datainput);
        return parsedData;
      } catch (error) {
        return { error: 'Invalid JSON input' };
      }
    },
  };
  