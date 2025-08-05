export default ({ host }, replace) => {
  return {
    sse: `${host}/sse/sse`,

    // Upload
    uploadFiles: `${host}/upload/private_files`,
    uploadChunk: `${host}/upload/upload_chunk`,
    mergeChunk: `${host}/upload/merge_chunks`,

    // Material
    materialUploadChunk: `${host}/materials/upload_chunk`,
  };
};
