-- 특정 물고기를 잡은 총 수 구하기
-- https://school.programmers.co.kr/learn/courses/30/lessons/298518

-- 문제
-- FISH_INFO 테이블에서 잡은 BASS와 SNAPPER의 수를 출력하는 SQL 문을 작성해주세요.

-- 컬럼명은 'FISH_COUNT`로 해주세요.

-- 예시
-- 예를 들어 FISH_INFO 테이블이 다음과 같고

-- ID	FISH_TYPE	LENGTH	TIME
-- 0	0	30	2021/12/04
-- 1	0	50	2020/03/07
-- 2	0	40	2020/03/07
-- 3	1	20	2022/03/09
-- 4	1	NULL	2022/04/08
-- 5	2	13	2021/04/28
-- 6	0	60	2021/07/27
-- 7	0	55	2021/01/18
-- 8	2	73	2020/01/28
-- 9	2	73	2021/04/08
-- 10	2	22	2020/06/28
-- 11	2	17	2022/12/23
-- FISH_NAME_INFO 테이블이 다음과 같다면

-- FISH_TYPE	FISH_NAME
-- 0	BASS
-- 1	SNAPPER
-- 2	ANCHOVY
-- 'BASS' 는 물고기 종류 0에 해당하고, 'SNAPPER' 는 물고기 종류 1에 해당하므로 잡은 'BASS' 와 'SNAPPER' 수는 7마리입니다.

-- FISH_COUNT
-- 7

-- 코드를 작성해주세요
select count(*) as fish_count from fish_info f1
join fish_name_info f2
on f1.fish_type = f2.fish_type
where f2.fish_name in('BASS','SNAPPER')