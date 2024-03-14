package com.ssafy.pickitup.domain.user.command;

import com.ssafy.pickitup.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCommandJpaRepository extends JpaRepository<User, Integer> {

}
