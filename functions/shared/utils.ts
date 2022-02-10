export const JsonResponse = (data, status = 200) => {
  const json = JSON.stringify(data);

  return new Response(json, {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });
};
