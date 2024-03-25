package com.ssafy.pickitup.domain.user.query;

import com.ssafy.pickitup.domain.recruit.query.RecruitQueryService;
import com.ssafy.pickitup.domain.recruit.query.dto.RecruitQueryResponseDto;
import com.ssafy.pickitup.domain.user.entity.User;
import com.ssafy.pickitup.domain.user.entity.UserKeyword;
import com.ssafy.pickitup.domain.user.exception.UserNotFoundException;
import com.ssafy.pickitup.domain.user.query.dto.KeywordResponseDto;
import com.ssafy.pickitup.domain.user.query.dto.UserResponseDto;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserQueryService {

    private final UserQueryJpaRepository userQueryJpaRepository;
    private final UserRecruitQueryJpaRepository userRecruitJpaRepository;
    private final RecruitQueryService recruitQueryService;
    private final UserKeywordQueryJpaRepository userKeywordQueryJpaRepository;

    public UserResponseDto getUserById(int id) {
        User user = userQueryJpaRepository.findById(id);
        int count = userRecruitJpaRepository.countByUserId(id);
        System.out.println("count = " + count);
        if (user == null) {
            throw new UserNotFoundException("해당 유저를 찾을 수 없습니다");
        }

        return UserResponseDto.toDto(user, count);
    }

    @Transactional(readOnly = true)
    public Page<RecruitQueryResponseDto> findMyRecruitById(int authId, Pageable pageable) {
        List<Integer> myRecruitIdList = userRecruitJpaRepository.findAllByUserId(authId);

        return recruitQueryService.searchByIdList(
            myRecruitIdList, pageable);
    }

    @Transactional(readOnly = true)
    public KeywordResponseDto findUserKeywords(int authId) {
        User user = userQueryJpaRepository.findById(authId);
        if (user == null) {
            throw new UserNotFoundException("해당 유저를 찾을 수 없습니다");
        }
        List<UserKeyword> userKeywords = userKeywordQueryJpaRepository.findAllByUserId(authId);
        List<String> keywordsName = userKeywords.stream()
            .map(userKeyword -> userKeyword.getKeyword().getName())
            .toList();

        return new KeywordResponseDto(keywordsName);
    }
}
