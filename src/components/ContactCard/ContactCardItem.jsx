export default function ContactCardItem({
  gender,
  Id,
  size,
  name,
  job,
  email,
}) {
  return (
    <li className="ContactCardItem">
      <img
        src={`/yamoo9/assets/master/images/faces/${gender}/${Id}.jpg`}
        height={size}
        width={size}
        alt={`${name} 얼굴
        `}
      />
      <strong>{name}</strong>
      <dl>
        <dt>직업</dt>
        <dd>{job}</dd>
        <dt>이메일</dt>
        <dd>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
      </dl>
    </li>
  );
}

function ContactCardImage() {}
