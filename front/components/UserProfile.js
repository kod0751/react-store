import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card>
      <Card.Meta avatar={<Avatar>PD</Avatar>} title="pDin" />
      <Button onClick={onLogout}>๋ก๊ทธ์์</Button>
    </Card>
  );
};

export default UserProfile;
