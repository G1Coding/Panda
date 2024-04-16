const getMessage = (msg, url) => {
  return `<script>
        alert('${msg}');
        location.href="${url}";
    </script>`;
};
const timeModify = (list) => {
  list = list.map((data) => {
    data.SAVE_DATE = data.SAVE_DATE.toLocaleString();
    return data;
  });
  return list;
};

module.exports = { getMessage, timeModify };
