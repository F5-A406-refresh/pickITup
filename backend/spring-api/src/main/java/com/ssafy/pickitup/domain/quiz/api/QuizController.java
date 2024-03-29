package com.ssafy.pickitup.domain.quiz.api;

import static com.ssafy.pickitup.global.api.ApiUtils.success;

import com.ssafy.pickitup.domain.quiz.dto.OxQuizResponseDto;
import com.ssafy.pickitup.domain.quiz.dto.SpeedQuizResponseDto;
import com.ssafy.pickitup.domain.quiz.query.service.QuizService;
import com.ssafy.pickitup.global.annotation.AuthID;
import com.ssafy.pickitup.global.api.ApiUtils.ApiResult;
import com.ssafy.pickitup.security.jwt.JwtTokenProvider;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://pickitup.online", "http://localhost:3000",
    "http://localhost:8080", "https://spring.pickitup.online"}, exposedHeaders = "*")
@RequestMapping("/quizzes")
public class QuizController {

    private final QuizService quizService;
    private final JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "OX 퀴즈 조회 API")
    @GetMapping("/ox/{category}")
    public ApiResult<List<OxQuizResponseDto>> getOxQuiz(@PathVariable String category) {
        return success(quizService.getOxQuiz(category));
    }

    @Operation(summary = "Speed 퀴즈 조회 API")
    @GetMapping("/speed/{category}")
    public ApiResult<List<SpeedQuizResponseDto>> getSpeedQuiz(@PathVariable String category) {
        return success(quizService.getSpeedQuiz(category));
    }

    @Operation(summary = "퀴즈 점수 수정 API")
    @PatchMapping("/win")
    public ApiResult<?> updateQuizScore(@AuthID Integer userId) {
        return success(quizService.increaseScore(userId));
    }
}

