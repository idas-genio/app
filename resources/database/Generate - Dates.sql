;WITH [dateVars] AS (
	SELECT
		DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0)) AS [LastDayOfPreviousYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousMonth]
		,DATEADD(DAY, -(DAY(GETDATE())), GETDATE()) AS [LastDayOfPreviousMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) - 1, 0) AS [FirstDayOfPreviousQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()), 0)) AS [LastDayOfPreviousQuarter]
		,DATEADD(wk, -1, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfPreviousWeek]
		,DATEADD(wk, 0, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfPreviousWeek]
		,DATEADD(DAY, DATEDIFF(DAY,0,GETDATE()),0) AS [Today]
		,DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0) AS [FirstDayOfCurrentYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()), 0) AS [FirstDayOfCurrentMonth]
		,DATEADD(dd, -1, DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()), 0) AS [FirstDayOfCurrentQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentQuarter]
		,DATEADD(wk, 0, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfCurrentWeek]
		,DATEADD(wk, 1, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfCurrentWeek]
		,DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextYear]
		,DATEADD (dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) +2, 0)) AS [LastDayOfNextYear]
		,DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextMonth]
		,DATEADD(dd, -1, DATEADD(mm, DATEDIFF(mm, 0, GETDATE()) + 2, 0)) AS [LastDayOfNextMonth]
		,DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) + 1, 0) AS [FirstDayOfNextQuarter]
		,DATEADD(dd, -1, DATEADD(qq, DATEDIFF(qq, 0, GETDATE()) +2, 0)) AS [LastDayOfNextQuarter]
		,DATEADD(wk, 1, DATEADD(DAY, 1-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [FirstDayOfNextWeek]
		,DATEADD(wk, 2, DATEADD(DAY, 0-DATEPART(WEEKDAY, GETDATE()), DATEDIFF(dd, 0, GETDATE()))) AS [LastDayOfNextWeek]
)
, [daysIn] AS (
	SELECT
		DATEDIFF(DAY, [FirstDayOfPreviousYear], [LastDayOfPreviousYear]) AS [DaysInPreviousYear]
		,DATEDIFF(DAY, [FirstDayOfPreviousMonth], [LastDayOfPreviousMonth]) AS [DaysInPreviousMonth]
		,DATEDIFF(DAY, [FirstDayOfPreviousQuarter], [LastDayOfPreviousQuarter]) AS [DaysInPreviousQuarter]
		,DATEDIFF(DAY, [FirstDayOfPreviousWeek], [LastDayOfPreviousWeek]) AS [DaysInPreviousWeek]
		,DATEDIFF(DAY, [FirstDayOfCurrentYear], [LastDayOfCurrentYear]) AS [DaysInCurrentYear]
		,DATEDIFF(DAY, [FirstDayOfCurrentMonth], [LastDayOfCurrentMonth]) AS [DaysInCurrentMonth]
		,DATEDIFF(DAY, [FirstDayOfCurrentQuarter], [LastDayOfCurrentQuarter]) AS [DaysInCurrentQuarter]
		,DATEDIFF(DAY, [FirstDayOfCurrentWeek], [LastDayOfCurrentWeek]) AS [DaysInCurrentWeek]
		,DATEDIFF(DAY, [FirstDayOfNextYear], [LastDayOfNextYear]) AS [DaysInNextYear]
		,DATEDIFF(DAY, [FirstDayOfNextMonth], [LastDayOfNextMonth]) AS [DaysInNextMonth]
		,DATEDIFF(DAY, [FirstDayOfNextQuarter], [LastDayOfNextQuarter]) AS [DaysInNextQuarter]
		,DATEDIFF(DAY, [FirstDayOfNextWeek], [LastDayOfNextWeek]) AS [DaysInNextWeek]
	FROM [dateVars]
)
, [times24HourSeconds] (n) AS (
	SELECT
		ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) - 1						-- zero-based
		-- Returns exactly 86400 rows (number of seconds in a day)					
	FROM       (VALUES(0),(0),(0),(0),(0),(0))                         a(n) -- 6 rows 
	CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) b(n) -- x12 rows
	CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) c(n) -- x12 rows
	CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         d(n) -- x10 rows
	CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         e(n) -- x10 rows
)
, [times24DayHours] AS (
	SELECT
		[time] = DATEADD(MINUTE, n, CAST('00:00' AS TIME))
	FROM [times24HourSeconds]
)
SELECT DISTINCT
	[Day]
FROM (
	SELECT
		DATEADD(DAY, DATEDIFF(DAY, 0, GETDATE()), CAST([time] AS VARCHAR(12))) AS [Day]
	FROM [times24DayHours]
) AS [dateTime]
ORDER BY
	[Day]