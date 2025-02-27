import React, { useState } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface User {
  key: string;
  username: string;
  email: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { key: '1', username: 'user1', email: 'user1@example.com' },
    { key: '2', username: 'user2', email: 'user2@example.com' },
  ]);

  const handleDelete = (key: string) => {
    setUsers(users.filter(user => user.key !== key));
    message.success('删除成功！');
  };

  const columns: ColumnsType<User> = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="确定删除吗？"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button type="link" danger>
            删除
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};

export default UserTable;
