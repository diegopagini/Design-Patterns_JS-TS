/** @format */

interface Strategy {
	login(user: string, password: string): boolean;
}

class LoginContext {
	private strategy: Strategy;

	constructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	setStrategy(strategy: Strategy): void {
		this.strategy = strategy;
	}

	login(user: string, password: string): boolean {
		return this.strategy.login(user, password);
	}
}

class LoginDBStrategy implements Strategy {
	login(user: string, password: string): boolean {
		console.log('DB');
		if (user === 'admin' && password === 'login') return true;
		else return false;
	}
}

class LoginServiceStrategy implements Strategy {
	login(user: string, password: string): boolean {
		console.log('Service');
		if (user === 'admin' && password === 'login') return true;
		else return false;
	}
}

class LoginGoogleStrategy implements Strategy {
	login(user: string, password: string): boolean {
		console.log('Google');
		if (user === 'admin' && password === 'login') return true;
		else return false;
	}
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', 'login')); // DB. true.
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin', 'login')); // Service. true.
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin', 'login')); // Google. true.
