import { FiAlertCircle } from 'react-icons/fi';

export default function Error404() {
  return (
    <div
      style={{
        padding: '200px 0',
        textAlign: 'center',
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FiAlertCircle size={30} />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
